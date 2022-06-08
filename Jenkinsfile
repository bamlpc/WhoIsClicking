pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                echo 'Pulling code..'
                //get code from a GitHub repository
                git url 'https://github.com/BMogetta/WhoIsClicking.git', branch: 'qa'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Building Docker Image') {
            steps {
                echo 'Building Docker-Compose Images...'
                //TODO: VER CARPETA DESDE DODNE EJECUTAR EL COMPOSE
                sh 'docker compose up --build -t'
            }
        }
        stage('Publish image to Docker Hub') {
            steps {
                echo 'Publishing image to Docker Hub...'
                //TODO: preparar credenciales
                 /*withDockerRegistry([ credentialsId: "dockerhub_id", url: "" ]) {
                    sh  'docker push bmogetta/whoisclicking:latest'
                    sh  'docker push bmogetta/whoisclicking:$BUILD_NUMBER' 
                    }
                  }*/
        }
        //TODO: buscar donde deployar
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        post {
            always {
               /* sh 'docker logout'*/
                echo 'Finished'
            }
        }
    }
}