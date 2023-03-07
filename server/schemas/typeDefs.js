const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    DOB: String
    height: String
    address: String
    phone: String
    allergies: String
    weight: [Weight]
    medication: [Medication]
    nutrition: [Nutrition]
    emergencyContact: [EmergencyContact]
    symptoms: [Symptoms]
  }

  type Weight {
    _id: ID
    pounds: String
    timeTaken: String
    createdBy: String
  }
  
  type Medication {
    _id: ID
    medicationName: String
    dosage: String
    timeTaken: String
    createdBy: String
  }

type Nutrition {
    _id: ID
    food: String
    drinks: String
    calories: Int
    date: String
    createdBy: String
  }

type EmergencyContact {
    _id: ID
    firstName: String
    lastName: String
    address: String
    phone: String
    relationship: String
    createdBy: String
  }

type Symptoms {
    _id: ID
    symptom: String
    date: String
    createdBy: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    weights: [Weight]!
    weight(weightId: ID!): Weight
    medications: [Medication]!
    medication(medicationId: ID!): Medication
    nutritions: [Nutrition]!
    nutrition(nutritionId: ID!): Nutrition
    emergencyContacts: [EmergencyContact]!
    emergencyContact(emergencyContactId: ID!): EmergencyContact
    symptoms: [Symptoms]!
    symptom(symptomId: ID!): Symptoms
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!, firstName: String!, lastName: String!, DOB: String!, height: String!, address: String!, phone: String!, allergies: String!): Auth
    addWeight(pounds: String!): Weight
    removeWeight(weightId: ID!): Weight
    addMedication(medicationName: String!, dosage: String!, frequency: String!, pillCount: Int!, startDate: String!, endDate: String!, taken: Boolean!): Medication
    removeMedication(medicationId: ID!): Medication
    addNutrition(food: String!, drinks: String!, calories: Int!, date: String!): Nutrition
    removeNutrition(nutritionId: ID!): Nutrition
    addEmergencyContact(firstName: String!, lastName: String!, address: String!, phone: String!, relationship: String!): EmergencyContact
    removeEmergencyContact(emergencyContactId: ID!): EmergencyContact
    addSymptom(symptom: String!, date: String!): Symptoms
    removeSymptom(symptomId: ID!): Symptoms
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
