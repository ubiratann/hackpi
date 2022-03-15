from postgres:latest
RUN mkdir -p /scripts
WORKDIR /scripts
COPY ./scripts/ ./
CMD ["bash", "create_tables.sh"]
