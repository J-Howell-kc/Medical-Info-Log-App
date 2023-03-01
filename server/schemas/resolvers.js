const { AuthenticationError } = require('apollo-server-express');
const { User, Symptoms, Nutrition, Medication, EmergencyContact } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user : async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  symptoms: async () => {
    return Symptoms.find();
  },

  symptom : async (parent, { symptomId }) => {
    return Symptoms.findOne({ _id: symptomId });
  },
  // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  me: async (parent, args, context) => {
    if (context.symptom) {
      return Symptoms.findOne({ _id: context.symptom._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  nutrition: async () => {
    return Nutrition.find();
  },

  nutritions : async (parent, { nutritionId }) => {
    return Nutrition.findOne({ _id: userId });
  },
  // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  me: async (parent, args, context) => {
    if (context.nutrition) {
      return Nutrition.findOne({ _id: context.nutrition._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  medication: async () => {
    return Medication.find();
  },

  medication : async (parent, { medicationId }) => {
    return Medication.findOne({ _id: medicationId });
  },
  // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  me: async (parent, args, context) => {
    if (context.medication) {
      return Medication.findOne({ _id: context.medication._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  emergencyContact: async () => {
    return EmergencyContact.find();
  },

  emergencyContact : async (parent, { emergencyContactId }) => {
    return EmergencyContact.findOne({ _id: emergencyContactId });
  },
  // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  me: async (parent, args, context) => {
    if (context.emergencyContact) {
      return EmergencyContact.findOne({ _id: context.emergencyContact._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  Mutation: {
    addUser: async (parent, { username, email, password, firstName, lastName, DOB, height, weight, address, phone }) => {
      const user = await User.create({ username, email, password, firstName, lastName, DOB, height, weight, address, phone });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
