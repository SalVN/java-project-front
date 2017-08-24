node {
   stage('Preparation') {
      git 'https://github.com/SalVN/java-project-front.git'
   }
    //   stage('Clean') {
    //      sh "npm -Dnpm.test.failure.ignore clean"
    //   }
    //   stage('Package') {
    //      sh "npm -Dmaven.test.failure.ignore package"
    //   }
      stage('Docker Build') {
         sh "docker build -t myapp ."
      }
      stage('Stop app') {
           sh "docker stop myapp || true"
           sh "docker rm myapp || true"
      }
       stage('Docker Deploy') {
           sh "docker run -d --name myapp -p 6061:6060 myapp"
      }
}