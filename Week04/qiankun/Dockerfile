FROM nginx:1.21.1-alpine
# 时区设置
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


ARG env=dev
COPY ./main/dist /usr/share/nginx/html/main/
COPY ./sub/dist /usr/share/nginx/html/sub/

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default-${env}.conf /etc/nginx/conf.d/default.conf

EXPOSE 7777
EXPOSE 7778

CMD ["nginx", "-g", "daemon off;"]