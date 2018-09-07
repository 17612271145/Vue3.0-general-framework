deploy-test:
	npm run build:testing
	scp dist/index.html root@test.zhulogic.com:/usr/local/tomcat/apache-tomcat-8.5.20/webapps/factory-manage/
