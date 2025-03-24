# Step 1: Build the React app
FROM node:20 as vite-build

WORKDIR /threehammers.co.uk

# Copy package.json and package-lock.json files
COPY package*.json ./


# Install dependencies
RUN yarn

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN yarn build

# Step 2: Serve the app using Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=vite-build /threehammers.co.uk/dist /usr/share/nginx/html

# Expose port 8080 to the Docker host, so we can access it 
# from the outside. This is a placeholder; Cloud Run will provide the PORT environment variable at runtime.
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"