# 1단계: 빌드 (완성본 제작)
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 서버 실행 (결과물 배포)
FROM nginx:alpine
# 빌드된 결과물(dist 폴더)만 서버로 옮깁니다.
COPY --from=build-stage /app/dist /usr/share/nginx/html
# 구글 클라우드 런 포트 설정
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
