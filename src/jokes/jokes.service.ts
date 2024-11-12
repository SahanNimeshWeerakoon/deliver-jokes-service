import { Injectable } from "@nestjs/common";
import { Joke } from "types/joke";

@Injectable()
export class JokesService {
    private jokeTypes: string[] = ['general', 'programming', 'knock-knock'];
    private jokes: Joke[] = [
        { type: 'general', content: 'Why did the chicken cross the road? To get to the other side!' },
        { type: 'programming', content: 'Why do programmers prefer dark mode? Because light attracts bugs!' },
    ];

    getRandomJoke(type: string) {
        const jokesByType = this.jokes.filter((joke: Joke) => joke.type === type);
        return jokesByType[Math.floor(Math.random() * jokesByType.length)]
    }

    getJokeTypes() {
        return this.jokeTypes;
    }
}