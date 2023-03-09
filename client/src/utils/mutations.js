import { gql } from "@apollo/client";

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
      }
    }
  }
`;

export const ADD_MEDICATION = gql`
  mutation addMedication(
    $medicationName: String!
    $dosage: String!
  ) {
    addMedication(
      medicationName: $medicationName
      dosage: $dosage
    ) {
      _id
      medicationName
      dosage
    }
  }
`;

export const REMOVE_MEDICATION = gql`
  mutation removeMedication(
    $userId: ID!
    $medicationName: String!
    $dosage: String!
    $frequency: String!
    $pillCount: Int!
    $startDate: String!
    $endDate: String!
    $taken: Boolean!
  ) {
    removeMedication(
      userId: $userId
      medicationName: $medicationName
      dosage: $dosage
      frequency: $frequency
      pillCount: $pillCount
      startDate: $startDate
      endDate: $endDate
      taken: $taken
    ) {
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
  mutation addNutrition(
    $userId: ID!
    $meal1: String!
    $time1: String!
    $meal2: String!
    $time2: String!
    $meal3: String!
    $time3: String!
    $snacks: String!
    $time4: String!
    $drinks: String!
    $date: String!
  ) {
    addNutrition(
      userId: $userId
      meal1: $meal1
      time1: $time1
      meal2: $meal2
      time2: $time2
      meal3: $meal3
      time3: $time3
      snacks: $snacks
      time4: $time4
      drinks: $drinks
            date: $date
    ) {
      _id
      meal1
      time1
      meal2
      time2
      meal3
      time3
      snacks
      time4
      drinks
      calories
      date
    }
  }
`;

export const REMOVE_NUTRITION = gql`
  mutation removeNutrition(
    $userId: ID!
    $meal1: String!
    $time1: String!
    $meal2: String!
    $time2: String!
    $meal3: String!
    $time3: String!
    $snacks: String!
    $time4: String!
    $drinks: String!
    $date: String!
  ) {
    removeNutrition(
      userId: $userId
      meal1: $meal1
      time1: $time1
      meal2: $meal2
      time2: $time2
      meal3: $meal3
      time3: $time3
      snacks: $snacks
      time4: $time4
      drinks: $drinks
            date: $date
    ) {
      _id
      meal1
      time1
      meal2
      time2
      meal3
      time3
      snacks
      time4
      drinks
      calories
      date
    }
  }
`;

export const ADD_WEIGHT = gql`
  mutation addWeight(
    $pounds: String!, 
    $date: String!
    ) {
    addWeight(
      pounds: $pounds, 
      date: $date
    ) {
      _id 
      pounds
      date
    }
  }
`;

export const ADD_EMERGENCYCONTACT = gql`
  mutation addEmergencyContact(
    $firstName: String!
    $lastName: String!
    $address: String!
    $phone: String!
    $relationship: String!
  ) {
    addEmergencyContact(
      firstName: $firstName
      lastName: $lastName
      address: $address
      phone: $phone
      relationship: $relationship
    ) {
      firstName
      lastName
      address
      phone
      relationship
    }
  }
`;

export const REMOVE_EMERGENCYCONTACT = gql`
  mutation removeEmergencyContact(
    $userId: ID!
    $name: String!
    $address: String!
    $phone: String!
    $relationship: String!
    $notes: String!
  ) {
    removeEmergencyContact(
      userId: $userId
      name: $name
      address: $address
      phone: $phone
      relationship: $relationship
      notes: $notes
    ) {
      _id
      name
      address
      phone
      relationship
      notes
    }
  }
`;

export const ADD_SYMPTOMS = gql`
  mutation addSymptoms(
    $symptom: String!
    $description: String!
    $intensity: Int!
    $date: String!
    $actionTaken: String!
    $dateStartStop: String!
  ) {
    addSymptoms(
      symptom: $symptom
      description: $description
      intensity: $intensity
      date: $date
      actionTaken: $actionTaken
      dateStartStop: $dateStartStop
    ) {
      _id
      symptom
      description
      intensity
      date
      actionTaken
      dateStartStop
    }
  }
`;

export const REMOVE_SYMPTOMS = gql`
  mutation removeSymptoms(
    $userId: ID!
    $description: String!
    $intensity: String!
    $date: String!
    $actionTaken: String!
  ) {
    removeSymptoms(
      userId: $userId
      description: $description
      intensity: $intensity
      date: $date
      actionTaken: $actionTaken
    ) {
      _id
      description
      intensity
      actionTaken
    }
  }
`;

export const ADD_ALLERGIES = gql`
  mutation addAllergies($triggers: String!) {
    addAllergies(triggers: $triggers) {
      _id
      triggers
    }
  }
`;

export const REMOVE_ALLERGIES = gql`
  mutation removeAllergies($userId: ID!, $allergies: String!) {
    removeMedication(userId: $userId, allergies: $allergies) {
      _id
      allergies
    }
  }
`;

export const ADD_BIO = gql`
  mutation addBio(
    $firstName: String!
    $lastName: String!
    $address: String!
    $phone: String!
    $DOB: String!
    $height: String!
    $gender: String!
  ) {
    addBio(
      firstName: $firstName
      lastName: $lastName
      address: $address
      phone: $phone
      DOB: $DOB
      height: $height
      gender: $gender
    ) {
      _id
      firstName
      lastName
      address
      phone
      DOB
      height
      gender
    }
  }
`;
