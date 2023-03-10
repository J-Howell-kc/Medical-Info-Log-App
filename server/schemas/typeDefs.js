const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    bio: [Bio]
    weight: [Weight]
    medication: [Medication]
    nutrition: [Nutrition]
    emergencyContact: [EmergencyContact]
    symptoms: [Symptoms]
    allergies: [Allergies]
  }

  type Bio {
    _id: ID
    firstName: String
    lastName: String
    address: String
    phone: String
    DOB: String
    height: String
    gender: String
  }
  
  type Weight {
    _id: ID
    pounds: String
    date: String
    createdBy: String
  }

  type Allergies {
    _id: ID
    triggers: String
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
    date: String!
    breakfast: String!
    breakTime: String!
    lunch: String!
    lunchTime: String!
    dinner: String!
    dinnerTime: String!
    snack: String!
    snackTime: String!
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
    description: String
    intensity: Int
    actionTaken: String
    date: String
    dateStartStop: String
    createdBy: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addWeight(pounds: String!, date: String!): Weight
    removeWeight(weightId: ID!): Weight
    addAllergies(triggers: String!): Allergies
    removeAllergies(allergiesId: ID!): Allergies    
    addBio(firstName: String!, lastName: String!, address: String!, phone: String!, DOB: String!, height: String!, gender: String!): Bio
    removeBio(bioId: ID!): Bio
    addMedication(medicationName: String!, dosage: String!): Medication
    removeMedication(medicationId: ID!): Medication
    addNutrition(date: String!, breakfast: String!, breakTime: String!, lunch: String!, lunchTime: String!, dinner: String!, dinnerTime: String!, snack: String!, snackTime: String!): Nutrition
    removeNutrition(nutritionId: ID!): Nutrition
    addEmergencyContact(firstName: String!, lastName: String!, address: String!, phone: String!, relationship: String!): EmergencyContact
    removeEmergencyContact(emergencyContactId: ID!): EmergencyContact
    addSymptoms(symptom: String!, description: String!, intensity: Int!, date: String!, actionTaken: String!, dateStartStop: String!): Symptoms
    removeSymptoms(symptomId: ID!): Symptoms
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(userId: ID!, email: String!, password: String!): User
    updateWeight(weightId: ID!, pounds: Int!): Weight
    updateAllergies(allergiesId: ID!, allergies: String!): Allergies
    updateBio(bioId: ID!, firstName: String!, lastName: String!, address: String!, phone: String!, DOB: String!, height: String!, gender: String!): Bio
    updateMedication(medicationId: ID!, medicationName: String!, dosage: String!, frequency: String!, pillCount: Int!, startDate: String!, endDate: String!, taken: Boolean!): Medication
    updateNutrition(nutritionId: ID!, food: String!, drinks: String!, calories: Int!, date: String!): Nutrition
    updateEmergencyContact(emergencyContactId: ID!, firstName: String!, lastName: String!, relationship: String!, phone: String!, address: String!): EmergencyContact
    updateSymptoms(symptomsIds: ID!, symptoms: String!, date: String!): Symptoms
  }
`;

module.exports = typeDefs;
