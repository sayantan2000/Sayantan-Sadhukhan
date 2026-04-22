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

def download_folder(folder_id, output_path):
    os.makedirs(output_path, exist_ok=True)
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    print(f"Downloading {folder_id} to {output_path}...")
    
    max_retries = 3
    for attempt in range(max_retries):
        try:
            # We run gdown as a subprocess
            result = subprocess.run(
                [sys.executable, "-m", "gdown", "--folder", url, "-O", output_path],
                check=True
            )
            print(f"Successfully downloaded {output_path}")
            break
        except subprocess.CalledProcessError as e:
            print(f"Attempt {attempt + 1} failed for {folder_id}: {e}")
            if attempt == max_retries - 1:
                print("Max retries reached. Exiting.")
                sys.exit(1)
            time.sleep(2)

def main():
    # Install gdown if not present
    try:
        import gdown
    except ImportError:
        print("gdown not found. Installing...")
        subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "--quiet"], check=True)

    for name, folder_id in FOLDERS.items():
        output_path = os.path.join(BASE_DIR, name)
        download_folder(folder_id, output_path)

if __name__ == "__main__":
    main()
