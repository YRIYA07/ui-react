const people = [
    {
      id: 0,
      name: "Michelle",
      city: "New York",
      lastMessage: "2 min",
      active: true,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Xmas",
        },
        {
          id: 1,
          title: "Tel:",
          info: "012 354 658",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "April 10th 1999",
        },
        {
          id: 3,
          title: "Gender",
          info: "Female",
        },
        {
          id: 4,
          title: "Language",
          info: "English",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/mature-man-character-portrait-picture-id529783925?k=6&m=529783925&s=612x612&w=0&h=0v6rOqBdQHyj4fNmZfLOC0b7JHCiLhhvD2Djok-T9UQ=",
      message: "Can you send me the client presso...",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "10.00",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "11.32",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          time: "15.52",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "16.12",
        },
        {
          id: 4,
          me: true,
          message:
            "Fifty Shades of Grey is a 2011 erotic romance novel by British author E.L. James. It is the first installment in the Fifty Shades trilogy that traces the deepening...",
          time: "23.37",
        },
      ],
    },
    {
      id: 1,
      name: "Matt Thompson",
      city: "Cape Town, RSA",
      lastMessage: "12 min",
      active: true,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Matt",
        },
        {
          id: 1,
          title: "Tel:",
          info: "015 400 658",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "June 15th 1969",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Chinese",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/wise-bald-happy-man-posing-for-a-photo-picture-id157433378?k=6&m=157433378&s=612x612&w=0&h=zp6-lXhLKZNytLyosqwiRON0h4SnXZWszpZ41uwcOAY=",
      message: "Busy typing...",
      messages: [
        {
          id: 0,
          me: false,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra maximus ipsum, ac bibendum purus volutpat quis. ",
          time: "6.20",
        },
        {
          id: 1,
          me: true,
          message:
            " Phasellus id odio et leo finibus luctus. Vivamus mattis molestie consequat. Donec at nunc non lectus fringilla cursus. Mauris vitae mi sapien.",
          time: "11.52",
        },
        {
          id: 2,
          me: false,
          message:
            " Donec tincidunt dui ut mauris tempor interdum. In pretium ut tellus eget elementum.",
          time: "14.27",
        },
        {
          id: 3,
          me: true,
          message:
            "Pellentesque lorem quam, aliquam tristique nisi ut, egestas placerat velit.",
          time: "17.21",
        },
      ],
    },
    {
      id: 2,
      name: "Justin Engel",
      lastMessage: "1 h",
      city: "Boston",
      active: false,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Bieber",
        },
        {
          id: 1,
          title: "Tel:",
          info: "666 999 000",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "December 1st 2000",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Greek",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/glasses-guy-picture-id866198538?k=6&m=866198538&s=612x612&w=0&h=FvPfvKV1RGYbY4akJ9nbPPiA_GjLgbYyLdp_a7YMQgs=",
      message: "Can you look after my carebears later?",
      messages: [
        {
          id: 0,
          me: false,
          message: " Curabitur sed arcu non nisi blandit congue vel non velit.",
          time: "13.20",
        },
        {
          id: 1,
          me: true,
          message:
            "Pellentesque lorem quam, aliquam tristique nisi ut, egestas placerat velit.",
          time: "18.30",
        },
        {
          id: 2,
          me: false,
          message: "Sed efficitur ultrices volutpat. Nulla facilisi.",
          image:
            "https://observer.com/wp-content/uploads/sites/2/2019/03/mitya-ivanov-1449970-unsplash.jpg?quality=80&crop=0px%2C504px%2C6000px%2C3000px&resize=876%2C438&strip",
          time: "22.45",
        },
      ],
    },
    {
      id: 3,
      name: "Emile",
      city: "Greece, Athens",
      lastMessage: "29 min",
      active: false,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Em",
        },
        {
          id: 1,
          title: "Tel:",
          info: "800 111 100",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "August 24th 1995",
        },
        {
          id: 3,
          title: "Gender",
          info: "Female",
        },
        {
          id: 4,
          title: "Language",
          info: "English",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/great-expectations-picture-id157287952?k=6&m=157287952&s=612x612&w=0&h=JjZOAA24hdpwE3uGjhQe_Ta9V4TjZ_EdP-0qRPB1CSM=",
      message: "Tell Matt I'am going to be late for work.",
      messages: [
        {
          id: 0,
          me: false,
          message: "Sed efficitur ultrices volutpat. Nulla facilisi.",
          time: "3.12",
        },
        {
          id: 1,
          me: true,
          message: "Morbi porttitor sem ac porta pellentesque.",
          image:
            "https://observer.com/wp-content/uploads/sites/2/2019/03/mitya-ivanov-1449970-unsplash.jpg?quality=80&crop=0px%2C504px%2C6000px%2C3000px&resize=876%2C438&strip",
          time: "6.50",
        },
        {
          id: 2,
          me: false,
          message:
            "Curabitur porttitor lorem nec ullamcorper euismod. Vivamus at felis velit. Maecenas eleifend libero enim, quis tempor risus tincidunt sed.",
          time: "21.36",
        },
      ],
    },
    {
      id: 4,
      name: "Grant",
      city: "Lisbon",
      lastMessage: "55 min",
      active: false,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Grantie",
        },
        {
          id: 1,
          title: "Tel:",
          info: "321 011 000",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "May 19th 1980",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Portuguese",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=6&m=656673020&s=612x612&w=0&h=uWvJ5xue1Mn8fj3_UdMYYh7FcGtLmm9UAv5a78yhoF8=",
      message: "Hey man if you have a moment can you...",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "12.00",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "13.52",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          image:
            "https://observer.com/wp-content/uploads/sites/2/2019/03/mitya-ivanov-1449970-unsplash.jpg?quality=80&crop=0px%2C504px%2C6000px%2C3000px&resize=876%2C438&strip",
          time: "14.22",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "19.52",
        },
        {
          id: 4,
          me: true,
          message: "Aenean id vehicula ipsum, sed eleifend justo.",
          time: "20.42",
        },
      ],
    },
    {
      id: 5,
      name: "Elize van Staden",
      lastMessage: "12 min",
      city: "Berlin",
      active: false,
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Eli",
        },
        {
          id: 1,
          title: "Tel:",
          info: "699 201 588",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "March 5th 2002",
        },
        {
          id: 3,
          title: "Gender",
          info: "Female",
        },
        {
          id: 4,
          title: "Language",
          info: "German",
        },
      ],
      image:
        "https://media.istockphoto.com/photos/business-woman-close-up-picture-id615744066?k=6&m=615744066&s=612x612&w=0&h=JKQNd2QtIy5cnpXApaoCEy09g2cIKrZ6V1cUo_efPnY=",
      message: "Meeting in 45min",
      messages: [
        {
          id: 0,
          me: false,
          message:
            "Sed vitae nulla ac augue mattis condimentum sed sit amet ligula. Curabitur porta purus eget consequat commodo.",
          time: "9.52",
        },
        {
          id: 1,
          me: true,
          message: "Aenean id vehicula ipsum, sed eleifend justo.",
          time: "19.22",
        },
        {
          id: 2,
          me: false,
          message: "Donec tincidunt interdum lobortis.",
          time: "20.02",
        },
        {
          id: 3,
          me: true,
          message: "Nulla mattis in urna sed auctor.",
          image:
            "https://observer.com/wp-content/uploads/sites/2/2019/03/mitya-ivanov-1449970-unsplash.jpg?quality=80&crop=0px%2C504px%2C6000px%2C3000px&resize=876%2C438&strip",
          time: "22.00",
        },
        {
          id: 4,
          me: true,
          message:
            "Curabitur in nisi tellus. Donec eget commodo purus, non varius magna. Cras arcu nulla, faucibus non arcu at, efficitur tempus urna",
          time: "23.26",
        },
      ],
    },
    {
      id: 6,
      name: "Luke Engel",
      lastMessage: "19 min",
      city: "Melbourne",
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Lukas",
        },
        {
          id: 1,
          title: "Tel:",
          info: "666 000 888",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "January 28th 1999",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Greek",
        },
      ],
      active: true,
      image:
        "https://media.istockphoto.com/photos/portrait-of-a-real-man-picture-id537458507?k=6&m=537458507&s=612x612&w=0&h=DCnrpnAcxmrF9YRJau3dW3c4nb0gn6ss_InEf_SLIjY=",
      message: "Do you know where Justin is? ",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "9.32",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "11.35",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          time: "12.07",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "18.30",
        },
        {
          id: 4,
          me: true,
          message: "Curabitur porttitor lorem nec ullamcorper euismod. ",
          time: "19.40",
        },
      ],
    },
    {
      id: 7,
      name: "Luke Engel",
      lastMessage: "19 min",
      city: "Melbourne",
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Lukas",
        },
        {
          id: 1,
          title: "Tel:",
          info: "666 000 888",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "January 28th 1999",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Greek",
        },
      ],
      active: true,
      image:
        "https://media.istockphoto.com/photos/portrait-of-a-real-man-picture-id537458507?k=6&m=537458507&s=612x612&w=0&h=DCnrpnAcxmrF9YRJau3dW3c4nb0gn6ss_InEf_SLIjY=",
      message: "Do you know where Justin is? ",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "9.32",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "11.35",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          time: "12.07",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "18.30",
        },
        {
          id: 4,
          me: true,
          message: "Curabitur porttitor lorem nec ullamcorper euismod. ",
          time: "19.40",
        },
      ],
    },
    {
      id: 8,
      name: "Luke Engel",
      lastMessage: "19 min",
      city: "Melbourne",
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Lukas",
        },
        {
          id: 1,
          title: "Tel:",
          info: "666 000 888",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "January 28th 1999",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Greek",
        },
      ],
      active: true,
      image:
        "https://media.istockphoto.com/photos/portrait-of-a-real-man-picture-id537458507?k=6&m=537458507&s=612x612&w=0&h=DCnrpnAcxmrF9YRJau3dW3c4nb0gn6ss_InEf_SLIjY=",
      message: "Do you know where Justin is? ",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "9.32",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "11.35",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          time: "12.07",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "18.30",
        },
        {
          id: 4,
          me: true,
          message: "Curabitur porttitor lorem nec ullamcorper euismod. ",
          time: "19.40",
        },
      ],
    },
    {
      id: 9,
      name: "Luke Engel",
      lastMessage: "19 min",
      city: "Melbourne",
      userContactInfo: [
        {
          id: 0,
          title: "Nickname:",
          info: "Lukas",
        },
        {
          id: 1,
          title: "Tel:",
          info: "666 000 888",
        },
        {
          id: 2,
          title: "Date of Birth:",
          info: "January 28th 1999",
        },
        {
          id: 3,
          title: "Gender",
          info: "Male",
        },
        {
          id: 4,
          title: "Language",
          info: "Greek",
        },
      ],
      active: true,
      image:
        "https://media.istockphoto.com/photos/portrait-of-a-real-man-picture-id537458507?k=6&m=537458507&s=612x612&w=0&h=DCnrpnAcxmrF9YRJau3dW3c4nb0gn6ss_InEf_SLIjY=",
      message: "Do you know where Justin is? ",
      messages: [
        {
          id: 0,
          me: false,
          message: "Jo what's a nice chilled movie I can go watch with my mom?",
          time: "9.32",
        },
        {
          id: 1,
          me: true,
          message:
            "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
          time: "11.35",
        },
        {
          id: 2,
          me: false,
          message: "Yeah man that should be fine.",
          time: "12.07",
        },
        {
          id: 3,
          me: true,
          message:
            "Okay great. You should check out 50 Shades -don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
          time: "18.30",
        },
        {
          id: 4,
          me: true,
          message: "Curabitur porttitor lorem nec ullamcorper euismod. ",
          time: "19.40",
        },
      ],
    },
  ];

  export default people;