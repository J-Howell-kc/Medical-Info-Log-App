import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_MEDICATION = gql`
  mutation addMedication($userId: ID!, $medicationName: String!, $dosage: String!, $frequency: String!, $pillCount: Int!, $startDate: String!, $endDate: String!, $taken: Boolean!) {
    addSkill(userId: $userId, medicationName: $medicationName, dosage: $dosage, frequency: $frequency, pillCount: $pillCount, startDate: $startDate, endDate: $endDate, taken: $taken) {
      _id
      medicationName
      dosage
      frequency
      pillCount
      startDate
      endDate
      taken
    }
  }
`;

export const REMOVE_MEDICATION = gql`
  mutation removeMedication($userId: ID!, $medicationName: String!, $dosage: String!, $frequency: String!, $pillCount: Int!, $startDate: String!, $endDate: String!, $taken: Boolean!) {
    removeMedication(userId: $userId, medicationName: $medicationName, dosage: $dosage, frequency: $frequency, pillCount: $pillCount, startDate: $startDate, endDate: $endDate, taken: $taken) {
      _id
      medicationName
      dosage
      frequency
      pillCount
      startDate
      endDate
      taken
    }
  }
`;

export const ADD_NUTRITION = gql`
  mutation addNutrition($userId: ID!, $food: String!, $drinks: String!, $calories: Int!, $date: String!) {
    addNutrition(userId: $userId, food: $food, drinks: $drinks, calories: $calories, date: $date) {
      _id
      food
      drinks
      calories
      date
    }
  }
`;

export const REMOVE_NUTRITION = gql`
  mutation removeNutrition($userId: ID!, $food: String!, $drinks: String!, $calories: Int!, $date: String!) {
    removeNutrition(userId: $userId, food: $food, drinks: $drinks, calories: $calories, date: $date) {
      _id
      food
      drinks
      calories
      date
    }
  }
`;

export const ADD_WEIGHT = gql`
  mutation addWeight($userId: ID!, $pounds: String! $date: String!) {
    addWeight(userId: $userId, pounds: $pounds date: $date) {
      _id
      pounds
      date
    }
  }
`;

export const ADD_EMERGENCYCONTACT = gql`
  mutation addEmergencyContact($userId: ID!, $firstName: String!, $lastName: String!, $address: String!, $phone: String!, $relationship: String!) {
    addEmergencyContact(userId: $userId, firstName: $firstName, lastName: $lastName, address: $address, phone: $phone, relationship: $relationship) {
      _id
      firstName
      lastName
      address
      phone
      relationship
    }
  }
`;

export const REMOVE_EMERGENCYCONTACT = gql`
  mutation removeEmergencyContact($userId: ID!, $firstName: String!, $lastName: String!, $address: String!, $phone: String!, $relationship: String!) {
    removeEmergencyContact(userId: $userId, firstName: $firstName, lastName: $lastName, address: $address, phone: $phone, relationship: $relationship) {
      _id
      firstName
      lastName
      address
      phone
      relationship
    }
  }
`;

export const ADD_SYMPTOMS = gql`
  mutation addSymptoms($userId: ID!, $description: String!, $intensity: String!, $date: String! $actionTaken: String!) {
    addSymptoms(userId: $userId, description: $description, intensity: $intensity, date: $date actionTaken: $actionTaken) {
      _id
      startDate
      endDate
      description
      duration
      intensity
      actionTaken
    }
  }
`;

export const REMOVE_SYMPTOMS = gql`
  mutation removeSymptoms($userId: ID!, $description: String!, $intensity: String!, $date: String!, $actionTaken: String!) {
    removeSymptoms(userId: $userId, description: $description, intensity: $intensity, date: $date, actionTaken: $actionTaken) {
      _id
      startDate
      endDate
      description
      duration
      intensity
      actionTaken
    }
  }
`;

