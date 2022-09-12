reset:
	docker-compose down 
	docker network prune -f
	docker image rm whoisclicking_home-ui  \
	whoisclicking_links-api whoisclicking_nginx whoisclicking_mongo-db
	docker volume prune -f
	sudo rm -rf infra/mongo-db/data/ infra/mongo-db/log/ infra/nginx/log/
	docker-compose up --build

winreset:
	docker-compose down 
	docker network prune -f
	docker image rm whoisclicking_home-ui  \
	whoisclicking_links-api whoisclicking_nginx whoisclicking_mongo-db
	docker volume prune -f
	Remove-Item -Path infra/mongo-db/data/ -Force -Recurse
	Remove-Item -Path infra/mongo-db/log/ -Force -Recurse
	Remove-Item -Path infra/nginx/log/ -Force -Recurse
	docker-compose up --build

dockertotalreset:
	docker system prune --all -f --volumes

.PHONY: reset winreset