#!/bin/bash

if [ "$#" -eq 0 ]
then
  echo "Usage: uploadToS3.sh dev (Need parameter)"
    exit 1
fi

export AWS_ACCESS_KEY_ID=$(jq -r '.Credentials.AccessKeyId' __session_token.json)
export AWS_SECRET_ACCESS_KEY=$(jq -r '.Credentials.SecretAccessKey' __session_token.json)
export AWS_SESSION_TOKEN=$(jq -r '.Credentials.SessionToken' __session_token.json)

aws s3 sync dist s3://osiria-ppt