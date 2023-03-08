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

  symptoms: async () => {
    return Symptoms.find();
  },

  symptom : async (parent, { symptomId }) => {
    return Symptoms.findOne({ _id: symptomId });
  },

  nutritions: async () => {
    return Nutrition.find();
  },

  nutrition : async (parent, { nutritionId }) => {
    return Nutrition.findOne({ _id: userId });
  },

  medications: async () => {
    return Medication.find();
  },

  medication : async (parent, { medicationId }) => {
    return Medication.findOne({ _id: medicationId });
  },

  emergencyContacts: async () => {
    return EmergencyContact.find();
  },

  emergencyContact : async (parent, { emergencyContactId }) => {
    return EmergencyContact.findOne({ _id: emergencyContactId });
  },

  weights: async () => {
    return Weight.find();
  },

  weight : async (parent, { weightId }) => {
    return Weight.findOne({ _id: weightId });
  },

  bios: async () => {
    return Bio.find();  
  },

  bio : async (parent, { bioId }) => {
    return Bio.findOne({ _id: bioId });
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
    
    // addSymptom: async (parent, args) => {
    //   const symptom = await Symptoms.create(args);
    //   const token = signToken(symptom);
      
    //   return { token, symptom };
    // },

    // addNutrition: async (parent, args) => {
    //   const nutrition = await Nutrition.create(args);
    //   const token = signToken(nutrition);

    //   return { token, nutrition };
    // },

    // addMedication: async (parent, args) => {
    //   const medication = await Medication.create(args);
    //   const token = signToken(medication);

    //   return { token, medication };
    // },

    // addEmergencyContact: async (parent, args) => {
    //   const emergencyContact = await EmergencyContact.create(args);
    //   const token = signToken(emergencyContact);

    //   return { token, emergencyContact };
    // },

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
          { $push: { weight: [{firstName, lastName, DOB, height, gender, address, phone, allergies, user:context.user._id, createdBy:context.user.email,}] } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    removeSymptom: async (parent, { symptomId }) => {
      return Symptoms.findOneAndDelete({ _id: symptomId });
    },

    removeNutrition: async (parent, { nutritionId }) => {
      return Nutrition.findOneAndDelete({ _id: nutritionId });
    },

    removeMedication: async (parent, { medicationId }) => {
      return Medication.findOneAndDelete({ _id: medicationId });
    },

    removeEmergencyContact: async (parent, { emergencyContactId }) => {
      return EmergencyContact.findOneAndDelete({ _id: emergencyContactId });
    },

    removeWeight: async (parent, { weightId }) => {
      return Weight.findOneAndDelete({ _id: weightId });
    },

    removeBio: async (parent, { bioId }) => {
      return Bio.findOneAndDelete({ _id: bioId });
  },
},
};

module.exports = resolvers;
