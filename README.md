# Stock Prediction System

LATEST UPDATE:

TO RUN LATEST SITE:

GO INTO FILE DIRECTORY "site_integration"

```cmd
 cd "site_integration"
```
**Note: This project is still in production and will not resemble the final product.**

## Note (Information)

For this project, we have included a different repository with different models trained on different epoch cycles and parameters, which are usable and integratable in this project.
<a href="https://github.com/debasishray16/Stock-Prediction-Models"> Link to Model's Repository</a>

```shell
docker run debasishray/streamlit-app:v1.0
docker stop debasishray/streamlit-app:v1.0
```

## Github Packages

1. Create a replica of Docker image with different tag.
2. Check the image created.
3. Authenticate by using **PAT (Personal Access Token)**.
4. Push that image in GitHub Packages.

```bash
docker tag debasishray/streamlit-app:v1.0 webapp

docker tag webapp ghcr.io/debasishray16/stockpredictor/webapp:latest
docker image ls

# For authentication
echo "pat-value" | docker login ghcr.io -u debasishray16 --password-stdin

# ghcr.io/<username>/<repository>
docker push ghcr.io/debasishray16/stockpredictor/webapp:latest
```
