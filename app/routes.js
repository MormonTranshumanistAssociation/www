// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = err => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => componentModule => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  return [
    {
      getComponent(nextState, cb) {
        import('containers/Page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/',
          name: 'home',
          getComponent(nextState, cb) {
            import('containers/HomePage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/news',
          name: 'news',
          getComponent(nextState, cb) {
            import('containers/NewsPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/NewsPage/List')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
          childRoutes: [
            {
              path: '/news/:id',
              getComponent(nextState, cb) {
                import('containers/NewsPage/Detail')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/about',
          name: 'about',
          getComponent(nextState, cb) {
            import('containers/AboutPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/AboutPage/pages/index.md')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
          childRoutes: [
            {
              path: 'transhumanist-declaration',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/TranshumanistDeclaration.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'affirmation',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/MormonTranshumanistAffirmation.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'statements',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/Statements.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'management',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/Management')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'board-of-directors',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/Board')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'members',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/Membership')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'constitution',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/Constitution.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'articles-of-incorporation',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/ArticlesOfIncorporation.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'faq',
              getComponent(nextState, cb) {
                import('containers/AboutPage/pages/FAQ.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/curriculum',
          name: 'curriculum',
          onEnter: ({ params }, replace) => replace('/primers'),
        },
        {
          path: '/primers',
          name: 'primers',
          getComponent(nextState, cb) {
            import('containers/CurriculumPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/CurriculumPage/lessons/index.md')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
          childRoutes: [
            {
              path: '1',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson1.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '2',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson2.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '3',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson3.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '4',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson4.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '5',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson5.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '6',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson6.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: '7',
              getComponent(nextState, cb) {
                import('containers/CurriculumPage/lessons/Lesson7.md')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/quotes',
          name: 'quotes',
          getComponent(nextState, cb) {
            import('containers/QuotesPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/meetup',
          name: 'meetup',
          getComponent(nextState, cb) {
            import('containers/MeetupPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/MeetupPage/Meetup.md')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
        },
        {
          path: '/join',
          name: 'join',
          getComponent(nextState, cb) {
            import('containers/JoinPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/JoinPage/Join.md')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
          childRoutes: [
            {
              path: 'form',
              getComponent(nextState, cb) {
                import('containers/JoinPage/Form')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/amazon',
          getComponent(nextState, cb) {
            window.location.href = `https://smile.amazon.com/ch/20-5826770`;
            cb();
          },
        },
        {
          path: '/conf/2018',
          name: 'conf/2018',
          getComponent(nextState, cb) {
            import('containers/ConferencePage2018')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          indexRoute: {
            getComponent(partialNextState, cb) {
              import('containers/ConferencePage2018/Welcome')
                .then(loadModule(cb))
                .catch(errorLoading);
            },
          },
          childRoutes: [
            {
              path: 'presenters',
              getComponent(nextState, cb) {
                import('containers/ConferencePage2018/Presenters')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'schedule',
              getComponent(nextState, cb) {
                import('containers/ConferencePage2018/Schedule')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
            {
              path: 'login',
              getComponent(nextState, cb) {
                import('containers/ConferencePage2018/SignIn')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
      ],
    },
    {
      path: '/conf/2018/timer',
      name: 'timer',
      getComponent(nextState, cb) {
        import('containers/ConferencePage2018/Timer')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/conf*',
      name: 'conf',
      getComponent(nextState, cb) {
        import('containers/ConferencesPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/pages/*',
      getComponent(nextState, cb) {
        window.location.href = `http://legacy.transfigurism.org${nextState.location.pathname}`;
        cb();
      },
    },
    {
      getComponent(nextState, cb) {
        import('containers/Page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      childRoutes: [
        {
          path: '*',
          name: 'notfound',
          getComponent(nextState, cb) {
            import('containers/NotFoundPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
  ];
}
