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
      {
        user_id: 6,
        name: 'User6',
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
        user_id: 2,
        title: '순대국 내장x',
        context: '내장 없어서 맛있게 먹었어요',
        created_at: '2019-01-02 13:11:42',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 3,
        title: '싸다 김밥 오므라이스',
        context: '오므라이스가 맛있어요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
      {
        content_id: 4,
        user_id: 4,
        title: '뚝배기 불고기',
        context: '매일 요일 매뉴 1000원 할인 있어요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
      {
        content_id: 5,
        user_id: 5,
        title: '볶음밥',
        context: '이국적인 음식 먹고 싶으면 나름 괜찮아요',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
      {
        content_id: 6,
        user_id: 6,
        title: '짜장 & 탕수육',
        context: '그냥 동네 짜장면',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      },
    ],
    Comment: [
      {
        comment_id: 1,
        user_id: 1,
        content_id: 0,
        context: '댓글1',
        created_at: '2019-03-29 14:11:11',
        updated_at: null,
        comment_edit: false,
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 1,
        context: '댓글2',
        created_at: '2019-03-29 16:11:11',
        updated_at: null,
        comment_edit: false,
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 2,
        context: '댓글3',
        created_at: '2019-03-29 14:11:11',
        updated_at: null,
        comment_edit: false,
      },
      {
        comment_id: 4,
        user_id: 2,
        content_id: 3,
        context: '댓글4',
        created_at: '2019-03-29 14:11:11',
        updated_at: null,
        comment_edit: false,
      },
      {
        comment_id: 5,
        user_id: 2,
        content_id: 4,
        context: '댓글5',
        created_at: '2019-03-29 14:11:11',
        updated_at: null,
        comment_edit: false,
      },
      {
        comment_id: 6,
        user_id: 2,
        content_id: 4,
        context: '댓글6',
        created_at: '2019-03-29 14:11:11',
        updated_at: null,
        comment_edit: false,
      },
    ],
    SubComment: [
      {
        subcomment_id: 1,
        comment_id: 3,  // foodList index 값
        user_id: 1, // CommentCreate data.user값
        context: '대댓글',
        created_at: '2019-03-29 16:22:11',
        updated_at: null,
        comment_edit: false,
      }
    ],
    foodList: [ // foodList DB data 가져오기
    {
      id: 1,
      writer: 'User1',
      name: '한양돈까스',
      evaluation: 5,
      coordinate: [127.03957534077702, 37.47721531792493],
    },
    {
      id: 2,
      writer: 'User2',
      name: '순대국',
      evaluation: 4,
      coordinate:[127.03627413028183, 37.48363196182872],
    },
    {
      id: 3,
      writer: 'User3',
      name: '싸다 김밥',
      evaluation: 4,
      coordinate:[127.03911429547514, 37.477783953208885],
    },
    {
      id: 4,
      writer: 'User4',
      name: '공복 식당',
      evaluation: 4,
      coordinate:[127.039803987076, 37.47748222912335],
    },
    {
      id: 5,
      writer: 'User5',
      name: '태국 식당 356',
      evaluation: 3,
      coordinate:[127.039651240311, 37.48410336645273],
    },
    {
      id: 6,
      writer: 'User6',
      name: '중화반점',
      evaluation: 3,
      coordinate:[127.039651240311, 37.48410336645273],
    },
  ],
  }