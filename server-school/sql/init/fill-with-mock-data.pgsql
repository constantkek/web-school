INSERT INTO public.users (login, hashed_password, role) 
VALUES
  ('{elonmusk@gmail.com}', '{spaceoddity}', '{student}'),
  ('{sam@gmail.com}', '{serious}', '{student}'),
  ('{iroh@gmail.com}', '{greentea}', '{teacher}'),
  ('{nixel@gmail.com}', '{pixel}', '{student}');

INSERT INTO public.courses (name)
VALUES
  ('{C}'),
  ('{Python}'),
  ('{Java}'),
  ('{TypeScript}'),
  ('{VueJS}');

INSERT INTO public.lessons (courseID, lesson_name, video_name, preview_link, video_link)
VALUES
  (5, '{Lesson 1: What is Vue?}', '{VueJS 2 – 2020 course}', '{https://i.ytimg.com/vi/OlnwgS-gk8Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB0w1XSKIFGobHG5CxkbiITFXVFPg}', '{https://www.youtube.com/watch?v=OlnwgS-gk8Y}'),
  (3, '{Lesson 1: What is Java?}', '{Java – 2020 course}', '{https://i.ytimg.com/vi/X81MWzN3j8Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCrRxGdC8mWJwdOJ6Sk6YBn3SW3UQ}', '{https://www.youtube.com/watch?v=X81MWzN3j8Q}'),
  (4, '{Lesson 1: What is TypeScript?}', '{TypeScript – 2020 course}', '{https://i.ytimg.com/vi/nyIpDs2DJ_c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhehvePIrG5MLEnmt-yd3U-5g7IQ}', '{https://www.youtube.com/watch?v=nyIpDs2DJ_c}'),
  (2, '{Lesson 1: What is Python?}', '{Python 3 – 2020 course}', '{https://i.ytimg.com/vi/fp5-XQFr_nk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBliUTuCu43NcBHL8X3uViTQMT0g}', '{https://www.youtube.com/watch?v=fp5-XQFr_nk}'),
  (4, '{Lesson 2: Interfaces in TypeScript.}', '{TypeScript Interfaces}', '{https://i.ytimg.com/vi/7NU6K4170As/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDByBvZ04qfdVgL6NOaJgQlKi0wPw}', '{https://www.youtube.com/watch?v=7NU6K4170As}');
  