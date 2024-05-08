pipeline {
    agent {
        docker {
            // Use the official Node.js Docker image with tag '16-alpine'
            image 'node:16-alpine'
            // Mount the Docker socket so Docker commands can be executed within the container
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run application') {
            steps {
                sh 'node app.js &'
            }
        }
    }
    post {
        always {
            sh 'pkill node'
        }
    }
}
