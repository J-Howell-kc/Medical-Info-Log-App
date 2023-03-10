import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      email
      password
    }
  }
`;

export const QUERY_MEDICATION = gql`
  query medication {
    medication {
      _id
      medicationName
      dosage
      frequency
      pillCount
      startDate
      endDate
      taken
      user {
        _id
      }
    }
  }
`;

export const QUERY_NUTRITION = gql`
  query nutrition {
    nutrition {
      _id
      food
      drinks
      calories
      date
      user {
        _id
      }
    }
  }
`;

export const QUERY_EMERGENCYCONTACT = gql`
  query emergencyContact {
    emergencyContact {
      _id
      firstName
      lastName
      address
      phone
      relationship
      user {
        _id
      }
    }
  }
`;

export const QUERY_SYMPTOMS = gql`
  query symptoms {
    symptoms {
      _id
      description
      startDate
      endDate
      intensity
      duration
      actionTaken
      user {
        _id
      }
    }
  }
`;

export const QUERY_WEIGHT = gql`
  query weight {
    weight {
      _id
      pounds
      date
      user {
        _id
      }
    }
  }
`;
