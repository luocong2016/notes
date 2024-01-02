## 一、 简介

- [pm2](https://www.npmjs.com/package/pm2) 是一个守护进程管理器

## 二、 快速安装

### 1. 安装

```sh
npm i -g pm2
```

### 2. 查看版本

```sh
pm2 -v
```

### 3. 更新 pm2 内存

```sh
pm2 update
```

## 三、常见命令

### 1. 查看应用列表

```sh
pm2 list
```

### 2. 管理应用程序

```sh
pm2 stop <app_name|namespace|id|'all'|json_conf>

pm2 restart <app_name|namespace|id|'all'|json_conf>

pm2 delete <app_name|namespace|id|'all'|json_conf>
```

### 3. 应用描述信息

```sh
pm2 describe <id|app_name>
```

### 4. 监听分析

```sh
pm2 monit
```

### 5. 查看日志

```sh
pm2 logs

pm2 logs APP-NAME       # Display APP-NAME logs
pm2 logs --json         # JSON output
pm2 logs --format       # Formated output

pm2 flush               # Flush all logs
pm2 reloadLogs          # Reload all logs
```

## 四、JSON 方式启动

```
pm2 start xxx.json --name xxx
```

```json
{
  "apps": [
    {
      "name": "yx-frame",
      "script": "pnpm",
      "args": "docs:dev"
    }
  ]
}
```
