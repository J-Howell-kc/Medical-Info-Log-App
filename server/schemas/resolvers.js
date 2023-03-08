const { AuthenticationError } = require('apollo-server-express');
const { User, Symptoms, Nutrition, Medication, EmergencyContact, Weight, Bio } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('weight').populate('medication').populate('nutrition').populate('emergencyContact').populate('symptoms');
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

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
    
    addSymptom: async (parent, { name, severity, date }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { symptoms: [{name, severity, date, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addNutrition: async (parent, { name, calories, fat, carbs, protein }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { nutrition: [{name, calories, fat, carbs, protein, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addMedication: async (parent, { name, dosage, frequency, startDate, endDate }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { medication: [{name, dosage, frequency, startDate, endDate, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addEmergencyContact: async (parent, { firstName, lastName, phone, address, relationship }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { emergencyContact: [{firstName, lastName, phone, address, relationship, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addWeight: async (parent, { pounds }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { weight: [{pounds, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addBio: async (parent, { firstName, lastName, DOB, height, gender, address, phone, allergies }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { bio: [{firstName, lastName, DOB, height, gender, address, phone, allergies, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    removeSymptom: async (parent, { symptomId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              symptoms: {
                _id: symptomId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeNutrition: async (parent, { nutritionId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              nutrition: {
                _id: nutritionId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeMedication: async (parent, { medicationId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              medication: {
                _id: medicationId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeEmergencyContact: async (parent, { emergencyContactId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              emergencyContact: {
                _id: emergencyContactId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeWeight: async (parent, { weightId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              weight: {
                _id: weightId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeBio: async (parent, { bioId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              bio: {
                _id: bioId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
  },
},
};

module.exports = resolvers;
