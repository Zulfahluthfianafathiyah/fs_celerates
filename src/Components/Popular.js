import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'

function Popular({rendered}) {
    const {popularAnime, isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if (!isSearch && rendered === 'popular') {
            return popularAnime?.slice(0, 16).map((anime) => { // Menampilkan hanya 10 gambar
                return (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                )
            })
        } else {
            return searchResults?.slice(0, 16).map((anime) => { // Menampilkan hanya 10 gambar
                return (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                )
            })
        }
    }
    return (
        <PopularStyled>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
    background: linear-gradient(135deg, #1f1f1f, #4e4e4e);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    .popular-anime {
        margin-top: 1rem;
        padding-top: 0 rem;
        padding-left: 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-top: 5px solid #ff4081;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

        a {
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);

            &:hover {
                transform: scale(1.05);
                box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 8px;
                transition: opacity 0.3s ease;

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }
`;

export default Popular