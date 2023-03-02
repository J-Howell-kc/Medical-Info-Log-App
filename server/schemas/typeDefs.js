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

  type weight {
    _id: ID
    weight: String
    user: [User]
  }
  
  type Medication {
    _id: ID
    medicationName: String
    dosage: String
    frequency: String
    pillCount: Int
    startDate: String
    endDate: String
    taken: Boolean
    user: [User]
  }

type Nutrition {
    _id: ID
    food: String
    drinks: String
    calories: Int
    date: String
    user: [User]
  }

type EmergencyContact {
    _id: ID
    firstName: String
    lastName: String
    address: String
    phone: String
    relationship: String
    user: [User]
  }

type Symptoms {
    _id: ID
    symptom: String
    date: String
    user: [User]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
  }
`;

module.exports = typeDefs;
