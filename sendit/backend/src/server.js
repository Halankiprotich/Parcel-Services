const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Enable CORS for front-end communication
app.use(express.json()); // Parse JSON bodies

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const {
      email, password, name, phone, address, role,
      licenseNumber, vehicleNumber, vehicleType, isAvailable,
      currentLat, currentLng
    } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        password, // Note: In production, hash the password before storing
        name,
        phone,
        address,
        role,
        licenseNumber,
        vehicleNumber,
        vehicleType,
        isAvailable,
        currentLat,
        currentLng
      }
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: { deletedAt: null } // Exclude soft-deleted users
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create a new parcel
app.post('/api/parcels', async (req, res) => {
  try {
    const {
      trackingNumber, senderId, senderName, senderEmail, senderPhone,
      recipientId, recipientName, recipientEmail, recipientPhone,
      pickupAddress, deliveryAddress, weight, description, value,
      deliveryInstructions, notes, latitude, longitude
    } = req.body;

    const parcel = await prisma.parcel.create({
      data: {
        trackingNumber,
        senderId,
        senderName,
        senderEmail,
        senderPhone,
        recipientId,
        recipientName,
        recipientEmail,
        recipientPhone,
        pickupAddress,
        deliveryAddress,
        weight,
        description,
        value,
        deliveryInstructions,
        notes,
        latitude,
        longitude
      }
    });
    res.status(201).json(parcel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create parcel' });
  }
});

// Get all parcels
app.get('/api/parcels', async (req, res) => {
  try {
    const parcels = await prisma.parcel.findMany({
      where: { deletedAt: null } // Exclude soft-deleted parcels
    });
    res.json(parcels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch parcels' });
  }
});

// Assign a driver to a parcel
app.put('/api/parcels/:id/assign', async (req, res) => {
  try {
    const { id } = req.params;
    const { driverId } = req.body;

    const parcel = await prisma.parcel.update({
      where: { id },
      data: {
        driverId,
        assignedAt: new Date(),
        status: 'assigned'
      }
    });
    res.json(parcel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to assign driver' });
  }
});

// Update parcel status
app.put('/api/parcels/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const parcel = await prisma.parcel.update({
      where: { id },
      data: { status }
    });
    res.json(parcel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update parcel status' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});