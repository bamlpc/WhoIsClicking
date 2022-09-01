reset:
	docker-compose down 
	docker system prune --all -f 
	docker volume prune -f
	sudo rm -rf infra/mongo-db/data/ infra/mongo-db/log/ infra/nginx/log/

.PHONY: reset