export default {
    User: [
      {
        user_id: 1,
        name: 'User1',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 2,
        name: 'User2',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 3,
        name: 'User3',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 4,
        name: 'User4',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 5,
        name: 'User5',
        created_at: '2018-09-11 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '등심 돈까스',
        context: '돈까스 야채 맛있어요!',
        created_at: '2019-01-01 13:11:42',
        updated_at: null
      },
      {
        content_id: 2,
        user_id: 3,
        title: '순대국 내장x',
        context: '내장 없어서 맛있게 먹었어요',
        created_at: '2019-01-02 13:11:42',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 2,
        title: '싸다 김밥 오므라이스',
        context: '오므라이스가 맛있어요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
      {
        content_id: 4,
        user_id: 2,
        title: '뚝배기 불고기',
        context: '매일 요일 매뉴 1000원 할인 있어요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
      {
        content_id: 5,
        user_id: 2,
        title: '볶음밥',
        context: '이국적인 음식 먹고 싶으면 나름 괜찮아요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      }
    ],
    Comment: [
      {
        comment_id: 1,
        user_id: 1,
        content_id: 3,
        context: '댓글1',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 3,
        context: '댓글2',
        created_at: '2019-03-29 16:11:11',
        updated_at: null
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 1,
        context: '댓글3',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      }
    ],
    SubComment: [
      {
        subcomment_id: 1,
        comment_id: 3,
        user_id: 1,
        context: '대댓글',
        created_at: '2019-03-29 16:22:11',
        updated_at: null
      }
    ]
  }