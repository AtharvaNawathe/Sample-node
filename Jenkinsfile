pipeline {
  agent {
    docker {
      image 'node:16-alpine'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/AtharvaNawathe/Sample-node.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install express'
      }
    }
  }
}
