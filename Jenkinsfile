node {
   stage('Preparation') {
      git 'https://github.com/SalVN/java-project-back.git'
   }
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