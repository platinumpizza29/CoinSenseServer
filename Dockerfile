# Use the official Node.js 14 base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Set environment variables
ENV SERVER_PORT=3000
ENV DATABASE_URL="postgresql://postgres:NQBh7gb7eLe5MjMC@db.ltiwdoahdjmbuzbpfbah.supabase.co:5432/postgres"
ENV MY_SECRET="n0b0dy listens t0 techn0 lets g0!!########"

# Expose the port on which the Express server will run
EXPOSE $SERVER_PORT

# Start the Express server
CMD ["npm", "start"]
