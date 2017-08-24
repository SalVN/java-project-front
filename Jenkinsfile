node {
   stage('Preparation') {
      git 'https://github.com/SalVN/java-project-front.git'
   }
      stage('Install NPM') {
         sh "npm install --unsafe-perm"
      }
      stage('Build NPM') {
         sh "npm run build"
      }
      stage('Docker Build') {
         sh "docker build -t myapp ."
      }
      stage('Stop app') {
           sh "docker stop myapp || true"
           sh "docker rm myapp || true"
      }
       stage('Docker Deploy') {
           sh "docker run -d --name myapp -p 80:80 myapp"
      }
}