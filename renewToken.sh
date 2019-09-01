#!/bin/bash

# 실행방법 : $ renewToken.sh XXXX AWS-USER-NAME
# $1(XXXX) 입력값은 arn-mfa-device 값으로 AWS console의 
# My Security Credentials > Multi--factor authentication (MFA) 밑의
# Assigned MFA device 임.
# $2(AWS-USER-NAME) 입력값은 arn-mfa-device 값으로 AWS console의 
#
# 실행해서 나온 결과를 ~/.aws/credentials 파일 안의 [temp] 밑에 세팅해줘야 
# aws s3 명령을 수행할 수 있게 됨.

# $otp 는 AWS 접속 Authy OTP 번호.

if [ "$#" -eq 0 ]
then
  echo "Usage: renewToken.sh 'ARN-NUMBER-PART' 'AWS-USER-NAME' (Need two parameter)"
    exit 1
fi

if [ "$#" -eq 1 ]
then
  echo "Usage: renewToken.sh 'ARN-NUMBER-PART' 'AWS-USER-NAME' (Need second parameter)"
    exit 1
fi

read -p "input token-code(OTP - Authy):" otp

# remove env
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_SESSION_TOKEN

# echo "Please change follwing info in ~/.aws/credentials"
aws sts get-session-token --serial-number arn:aws:iam::$1:mfa/$2 --token-code $otp > __session_token.json

# export AWS_ACCESS_KEY_ID=$(jq -r '.Credentials.AccessKeyId' __session_token.json)
# export AWS_SECRET_ACCESS_KEY=$(jq -r '.Credentials.SecretAccessKey' __session_token.json)
# export AWS_SESSION_TOKEN=$(jq -r '.Credentials.SessionToken' __session_token.json)

# echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
# echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
# echo "AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN"

echo "Session token has been renewed!"