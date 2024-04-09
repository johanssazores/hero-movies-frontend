"use client";
import React from "react";
import { useLikedMovies } from "@/services/likeMoviesServices";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Button from "@/components/Button";
const MyList: React.FC = () => {
  const { likedMovies, removeLike } = useLikedMovies();

  return (
    <div className="px-6 mt-6 w-full ">
      <Grid>
        {likedMovies.map((lk: any, i: any) => (
          <Card key={i}>
            <h2
              className="font-semibold"
              dangerouslySetInnerHTML={{ __html: lk?.title }}
            ></h2>
            <p className="font-light">{lk?.year}</p>
            <p
              className="font-light"
              dangerouslySetInnerHTML={{ __html: lk?.description }}
            ></p>
            <Button onClick={() => removeLike(lk.movieId, lk.userId)}>
              Remove
            </Button>
          </Card>
        ))}
      </Grid>
      <Button className="mt-10" anchor={true} href="/movies">
        Back
      </Button>
    </div>
  );
};

export default MyList;
