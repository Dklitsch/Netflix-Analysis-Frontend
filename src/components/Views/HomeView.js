import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import useFetch from '../UseFetch';
import TypeChart from '../TypeChart';
import DirectorChart from '../DirectorChart';
import CastChart from '../CastChart';
import CountryBarChart from '../CountryBarChart';
import YearChart from '../YearChart';
import ListedInChart from '../ListedInChart';
import apiRoute from '../ApiData';
import { Link } from 'react-router-dom';

function HomeView(props) {

    const typeData = useFetch(`${apiRoute}/type`);

    const directorData = useFetch(`${apiRoute}/director/top5`);

    const castData = useFetch(`${apiRoute}/cast/top5`);

    const countryTop10Data = useFetch(`${apiRoute}/country/top10`);

    const topYearData = useFetch(`${apiRoute}/releaseyear/top10`);

    const bottomYearData = useFetch(`${apiRoute}/releaseyear/bottom10`);

    const listedInData = useFetch(`${apiRoute}/listedin/top10`);

    const oldestMovies = useFetch(`${apiRoute}/movie?order=asc&take=5`);

    const oldestTV = useFetch(`${apiRoute}/tvshow?order=asc&take=5`);

    const linkToDirector = (directorList) => {
      return directorList.split(", ").map(director => <Link to={`/Netflix-Analysis-Frontend/director/${director}`}>{director}</Link>).reduce((prev, curr) => [prev, ', ', curr])
    }

    return (
    <>
        <p>
          Hi, welcome to my Netflix Analysis Dashboard!
        </p>

        <p>This dashboard displays some interesting statistics about Netflix titles. The goal is to present the data in an intuitive and accessable way.</p>
        
        <p>This project is based on <a href="https://www.kaggle.com/shivamb/netflix-shows" target="_blank">this</a> dataset from Flixable. </p>

        <TypeChart data={typeData} />

        <DirectorChart data={directorData} />

        <p>High release directors tend to release their titles in huge batches. For example, co-directors Jan Suter and Raúl Campos released a wopping 12 titles in 2018 compared to the average director who has only a single title on Netflix.</p>

        <p>High release directors tend to have a large number of newer releases. The oldest film by any top 5 director is 2008's "A Very Special Love" by Cathy Garcia-Molina. None of the top 5 directors have any titles released before the 2000s.</p>

        <p>Only around 7% of TV shows list directors, notable exceptions being documentarians like Alastair Fothergill with 3 titles and Ken Burns with 2.</p>

        <CastChart data={castData} />

        <p>How does a person become the most prolific actor on Netflix? Does it help to be consistent? Let's take a closer look at the top 100 actors and find out.</p>

        <img src={`${apiRoute}/cast/top100/mean_releases_scatterplot.png`}></img>

        <p>As we might expect our data tends to cluster in the lower right corner. We have a couple of outliers with high average titles per year, but a low number of total titles.</p>
          
        <p>Our most prolific actor, Anupam Kher, actually has remarkably few average releases: <strong>1.83 releases per year</strong>. For comparisan, Takahiro Sakurai, tied for 5th place, has <strong>2.64 releases per year</strong>.</p>

        <p>What about the number of years where the actor released at least one movie? Do long careers win out over shorter, more productive ones?</p>

        <img src={`${apiRoute}/cast/top100/years_active_scatterplot.png`}></img>

        <p>That's a lot clearer of a trend. Part of Anupam Kher's success is he's been active for an astounding 23 years. Takahiro Sakurai's 11 year career means he's still catching up. Shah Rukh Khan does have a slightly longer 24 year career, but his lower 1.5 title per year average means that Anupam was able to outpace him.</p>

        <CountryBarChart data={countryTop10Data} />

        <h2>Netflix skews heavily towards newer titles, half of all titles were released after 2017!</h2>

        <img src={`${apiRoute}/releaseyear/yearchart.png`}></img>

        <YearChart data={topYearData} title='10 years with the most Netflix titles'/>

        <YearChart data={bottomYearData} title='10 years with the least Netflix titles'/>

        <h2>Top 5 Oldest movies</h2>

        <ol>
          {oldestMovies != null && oldestMovies.map( d => <li key= {d.title}>{d.title} by {linkToDirector(d.director) ?? 'unlisted'} - {d['release_year']}</li>)}
        </ol>

        <h2>Top 5 Oldest TV shows</h2>

        <ol>
          {oldestTV != null && oldestTV.map( d => <li key= {d.title}>{d.title} - {d['release_year']}</li>)}
        </ol>

        <ListedInChart data={listedInData} />
        
    </>
    );
  }

export default HomeView;