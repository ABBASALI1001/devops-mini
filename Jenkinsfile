pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("abbas1001/devops-mini:latest")
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', 'docker-hub-creds') {
                        docker.image("abbas1001/devops-mini:latest").push()
                    }
                }
            }
        }
    }
}

