FROM tomcat:9.0.63-jre11

RUN cp -r webapps.dist/* webapps/

RUN rm /usr/local/tomcat/webapps/host-manager/META-INF/context.xml

COPY ./context.xml ./usr/local/tomcat/webapps/host-manager/META-INF/context.xml

RUN rm /usr/local/tomcat/webapps/manager/META-INF/context.xml

COPY ./context.xml ./usr/local/tomcat/webapps/manager/META-INF/context.xml

RUN rm /usr/local/tomcat/conf/tomcat-users.xml

COPY ./tomcat-users.xml ./usr/local/tomcat/conf/tomcat-users.xml