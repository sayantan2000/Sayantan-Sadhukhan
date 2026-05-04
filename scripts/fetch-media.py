import os
import subprocess
import sys
import time

FOLDERS = {
    "AquatisSurvival": "12icIFd43U86RT0BL4l3M2I2Bk9iHgzt9",
    "BibleRun": "1VbK4qYuhAE-Ivf3WaRgJ8-qeWKDsBJW7",
    "fun_arena": "1W557jF5uBP3MScCl9GzthnFRVCuvBK6f",
    "ludo_looters": "1ALfCMpuGtwyx84tKPMD7QjtxdMwocj8T",
    "Odyssey": "1FDYI1LB_8IG3c7QpvaFSvAo-1uDttMuh",
    "the_verse": "1Ua9KzwcuIWFIEoe4fUKuHKDRh7xAGtap"
}

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'media')

def _has_real_files(path):
    """True if path contains at least one non-empty file (recursively)."""
    if not os.path.isdir(path):
        return False
    for root, _dirs, files in os.walk(path):
        for f in files:
            try:
                if os.path.getsize(os.path.join(root, f)) > 0:
                    return True
            except OSError:
                continue
    return False


def download_folder(folder_id, output_path):
    """Try to download a Drive folder. Returns True on success, False on failure.

    Note: gdown can exit non-zero even when every requested file actually
    landed on disk (e.g. when Drive's virus-scan interstitial trips on the
    last file). We therefore treat "files present after the run" as success.
    """
    os.makedirs(output_path, exist_ok=True)
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    print(f"Downloading {folder_id} to {output_path}...")

    max_retries = 3
    last_error = None
    for attempt in range(max_retries):
        try:
            # --remaining-ok lets gdown keep going past individual files that
            #   hit Drive's virus-scan / quota interstitial (e.g. videos),
            #   instead of aborting the whole folder.
            subprocess.run(
                [
                    sys.executable, "-m", "gdown",
                    "--folder", url,
                    "-O", output_path,
                    "--remaining-ok",
                ],
                check=True,
            )
            print(f"Successfully downloaded {output_path}")
            return True
        except subprocess.CalledProcessError as e:
            last_error = e
            # If gdown actually managed to place files on disk, accept it.
            if _has_real_files(output_path):
                print(
                    f"gdown exited non-zero for {folder_id} but media is "
                    f"present in {output_path}; treating as success."
                )
                return True
            print(f"Attempt {attempt + 1} failed for {folder_id}: {e}")
            if attempt < max_retries - 1:
                time.sleep(2)

    print(
        f"WARNING: Could not fully download {folder_id} into {output_path} "
        f"after {max_retries} attempts ({last_error}). "
        f"Continuing build with partial media."
    )
    return False

def main():
    # Install gdown if not present. Pinned to 5.2.0 because the 6.x series
    #   (a separate fork) drops --remaining-ok and fails on Drive's
    #   virus-scan interstitial that gates large videos.
    required_gdown = "gdown==5.2.0"
    needs_install = True
    try:
        import gdown  # noqa: F401
        if getattr(gdown, "__version__", "") == "5.2.0":
            needs_install = False
    except ImportError:
        pass
    if needs_install:
        print(f"Installing {required_gdown}...")
        base_cmd = [sys.executable, "-m", "pip", "install", required_gdown, "--quiet"]
        # PEP 668 environments (Vercel's uv-managed Python, some Linux
        #   distros) refuse a plain `pip install`. Try the safest variants
        #   in order, falling back as needed.
        attempts = [
            base_cmd,
            base_cmd + ["--break-system-packages"],
            base_cmd + ["--user", "--break-system-packages"],
            base_cmd + ["--user"],
        ]
        last_err = None
        for cmd in attempts:
            try:
                subprocess.run(cmd, check=True)
                last_err = None
                break
            except subprocess.CalledProcessError as e:
                last_err = e
        if last_err is not None:
            raise last_err

    # Allow callers (CI, dev) to skip the media fetch entirely.
    if os.environ.get("SKIP_FETCH_MEDIA"):
        print("SKIP_FETCH_MEDIA is set; skipping Google Drive media download.")
        return

    failures = []
    for name, folder_id in FOLDERS.items():
        output_path = os.path.join(BASE_DIR, name)
        if not download_folder(folder_id, output_path):
            failures.append(name)

    if failures:
        print(
            "fetch-media finished with partial failures for: "
            + ", ".join(failures)
            + ". Build will continue; affected media may be missing on the deployed site."
        )

if __name__ == "__main__":
    main()
