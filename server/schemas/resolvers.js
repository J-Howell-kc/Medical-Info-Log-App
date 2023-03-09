const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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
    
    addSymptoms: async (parent, { symptom, description, date, intensity, actionTaken, dateStartStop }, context) => {
      console.log(context.user);

      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { symptoms: [{symptom, description, date, intensity, dateStartStop, actionTaken, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addNutrition: async (parent, { food, drinks, calories, date }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { nutrition: [{food, drinks, calories, date, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addMedication: async (parent, { medicationName, dosage }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { medication: [{medicationName, dosage, user:context.user._id, createdBy:context.user.email,}] } },
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

    addWeight: async (parent, { pounds, date }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { weight: [{pounds, date, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addBio: async (parent, { firstName, lastName, DOB, height, gender, address, phone }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { bio: [{firstName, lastName, DOB, height, gender, address, phone, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addAllergies: async (parent, { triggers }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { allergies: [{triggers, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    removeSymptoms: async (parent, { symptomsId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              symptoms: {
                _id: symptomsId,
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

    removeAllergies: async (parent, { allergiesId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              allergies: {
                _id: allergiesId,
                createdBy: context.user.email,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateAllergies: async (parent, { allergiesId, allergies }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'allergies._id': allergiesId },
          {
            $set: {
              'allergies.$.allergies': allergies,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateSymptoms: async (parent, { symptomsId, name, severity, date }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'symptom._id': symptomsId },
          {
            $set: {
              'symptoms.$.name': name,
              'symptoms.$.severity': severity,
              'symptoms.$.date': date,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateNutrition: async (parent, { nutritionId, name, calories, date }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'nutrition._id': nutritionId },
          {
            $set: {
              'nutrition.$.name': name,
              'nutrition.$.calories': calories,
              'nutrition.$.date': date,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateMedication: async (parent, { medicationId, name, dosage, date }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'medication._id': medicationId },
          {
            $set: {
              'medication.$.name': name,
              'medication.$.dosage': dosage,
              'medication.$.date': date,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateEmergencyContact: async (parent, { emergencyContactId, name, phone, email }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'emergencyContact._id': emergencyContactId },
          {
            $set: {
              'emergencyContact.$.name': name,
              'emergencyContact.$.phone': phone,
              'emergencyContact.$.email': email,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    
    updateWeight: async (parent, { weightId, pounds }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'weight._id': weightId },
          {
            $set: {
              'weight.$.pounds': pounds,
            },
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateBio: async (parent, { firstName, lastName, DOB, height, gender, address, phone}, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id, 'bio._id': bioId },
          {
            $set: {
              'bio.$.firstName': firstName,
              'bio.$.lastName': lastName,
              'bio.$.DOB': DOB,
              'bio.$.height': height,
              'bio.$.gender': gender,
              'bio.$.address': address,
              'bio.$.phone': phone,
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
