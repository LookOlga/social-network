import profileReducer, {addPostActionCreator} from "./profileReducer";
let state = {
    posts: [
        {
            id: 1,
            name: "Sasha Torn",
            postText:"Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная)."
        },
        {
            id: 2,
            name: "Hope Smith",
            postText:"Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры."
        }

    ],
}
it('new post should be added', () => {

    let action = addPostActionCreator("Hello, guys!")
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

it('postText is the same', () => {

    let action = addPostActionCreator("Hello, guys!")
    let newState = profileReducer(state, action);

    expect(newState.posts[2].postText).toBe("Hello, guys!")
})


