## Setup

1. Open your repository in GitHub Codespaces.
2. In the Codespaces environment, open a terminal and run the following commands to install and enable the Java kernel:
    ```sh
    docker pull jbindinga/java-notebook
    docker run -it --rm -p 8888:8888 jbindinga/java-notebook
    ```
3. Copy the URL from the terminal output (it will look something like `http://127.0.0.1:8888/?token=...`).
4. Navigate to the `notebook.ipynb` file and open it.
5. Once the notebook is open, look for the kernel selection option (usually found at the top right corner of the notebook interface).
6. Click on the kernel selection dropdown and choose "Existing Jupyter Server".
7. Enter the URL you copied in step 3.
8. Select Java
9. You can now run the cells in the notebook using the Java kernel.
