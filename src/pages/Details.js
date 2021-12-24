import React from 'react';
import { useParams } from "react-router-dom";


// class Details extends React.Component {
//   render() {
//     const {id} = this.props.match.params 
//     console.log(id);
//     return(
//       <>
//       <section className="section hero movieDetails has-bullets">
//         <div className="container">
//           <div className="movieVideo">
//             <iframe src={`https://www.youtube.com/embed/edfw9ip9sCQ?modestbranding=1&rel=0`}
//               frameBorder='0'
//               title='video'
//             />
//           </div>
//           <div className="movieDetails">
//             <h2 className="featured-title">Peaky Blinders</h2>
//             <p className="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى
//                             سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض
//                             لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات</p>
//             <p className="movie-general-data">12-9-2013</p>
//           </div>
//         </div>
//       </section>
//       <section className="section movie-meta-data">
//           <div className="container">
//             <h3 className="section-title">التفاصيل</h3>
//             <ul>
//               <li>
//                 <span className="title"> النوع </span>
//                 <span className="values">مغامرة </span>
//               </li>
//             </ul>
//             <div className="plot">
//               <h3 className="section-title">القصة</h3>
//               <p>ر أحداث الفيلم حول محاولة شرطي أميركي التخفي للتسلل وسط عصابة «أيرلندية - أميركية»، لإثبات الإدانات ضدها وضد رئيس العصابة، فيقوم بكسب ثقة رئيس العصابة ويصبح واحدًا منهم، ولكن تتعقد الأحداث أكثر؛ حيث إن للعصابة جاسوسًا في هيئة الشرطة، ينقل لها جميع تحركات الشرطة ويحبط جميع مخططات الشرطة للقبض على العصابة، فتصبح مهمته الأساسية هي كشف هوية الشرطي المتخفي بناءً علي طلب رئيس العصابة.</p>
//             </div>
//           </div>
//       </section>
//       </>
//       )
//   }
// }

const Details = (props)=>{
  const movieId =useParams().id;
  const movies = props.movies;
  /*
  const movie = movies.filter((mv)=>{
    return mv.posterPath ==="/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg"
  })*/
  const movie = movies.find((mv)=>{
    return mv.posterPath.includes(movieId)
  })
  console.log(movie);
  return(
    <>
<section className="section hero movieDetails has-bullets">
  <div className="container">
    <div className="movieVideo">
      <iframe src={`https://www.youtube.com/embed/${movie.movieVideos.key}`}
        frameBorder='0'
        title='video'
      />
    </div>
    <div className="movieDetails">
      <h2 className="featured-title">{movie.originalTitle}</h2>
      <p className="featured-overview">{movie.originalOverview}</p>
      <p className="movie-general-data">{movie.releaseDate}</p>
    </div>
  </div>
</section>
<section className="section movie-meta-data">
    <div className="container">
      <h3 className="section-title">التفاصيل</h3>
      {/* <h3> the movie of the page is {movie.originalTitle}</h3> */}
      <ul>
        <li>
          <span className="title"> النوع </span>
          <span className="values">{movie.genres.join(' | ')}</span>
        </li>
      </ul>
      <div className="plot">
        <h3 className="section-title">القصة</h3>
        <p>{movie.originalOverview}</p>
      </div>
    </div>
</section>
</>
  )
}

export default Details;