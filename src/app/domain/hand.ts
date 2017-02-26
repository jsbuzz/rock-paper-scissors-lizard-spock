export class Hand {
    id: number;
    name: string;
    beatList: { [index: number]: string } = {};
    static list : Hand[] = [];

    constructor(id: number, name: string, beatList: { [index: string]: string }) {
        this.id = id;
        this.name = name;
        this.beatList = beatList;

        Hand.list.push(this);
    }

    beats(hand: Hand) : Boolean {
        return this.beatList.hasOwnProperty(hand.name);
    }

    beatString(hand: Hand) : string {
        return this.name
        + " "
        + this.beatList[hand.name]
        + " "
        + hand.name;
    }

    static draw() : Hand {
        var id : number = Math.floor(((Math.random() * 100) % 5) + 1);

        switch(id) {
            case 1: return Rock;
            case 2: return Paper;
            case 3: return Scissors;
            case 4: return Lizard;
            case 5: return Spock;
        }
    }

    toString() : string {
        return this.name;
    }
}

export const Rock : Hand = new Hand(1, "Rock",
    {
        "Scissors" : "crushes",
        "Lizard" : "crushes",
        "Empty hand" : "smashes",
    }
);
export const Paper : Hand = new Hand(2, "Paper",
    {
        "Rock" : "covers",
        "Spock" : "disproves",
        "Empty hand" : "cuts into",
    }
);
export const Scissors : Hand = new Hand(3, "Scissors",
    {
        "Paper" : "cuts",
        "Lizard" : "decapitates",
        "Empty hand" : "cuts off",
    }
);
export const Lizard : Hand = new Hand(4, "Lizard",
    {
        "Paper" : "eats",
        "Spock" : "poisons",
        "Empty hand" : "bites",
    }
);
export const Spock : Hand = new Hand(5, "Spock",
    {
        "Scissors" : "smashes",
        "Rock" : "vaporises",
        "Empty hand" : "laughs at",
    }
);
export const EmptyHand : Hand = new Hand(0, "Empty hand", {});
