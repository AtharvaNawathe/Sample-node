pipeline {
    agent {
        docker {
            
            image 'node:16-alpine'
            args '-u node'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm config set cache /home/node/.npm-cache --global'
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
