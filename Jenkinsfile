pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/ABBASALI1001/devop-mini.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("abbasali1001/devops-mini:latest")
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', 'docker-hub-creds') {
                        docker.image("abbasali1001/devops-mini:latest").push()
                    }
                }
            }
        }
    }
}
