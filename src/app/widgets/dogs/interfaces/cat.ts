export class Cat {
public adaptability: number;
public affection_level: number;
public alt_names: string;
public cfa_url: string;
public child_friendly: number;
public country_code: string;
public country_codes: string;
public description: string;
public dog_friendly: number;
public energy_level: number;
public experimental: number;
public grooming: number;
public hairless: number;
public health_issues: number;
public hypoallergenic: number;
public id: string;
public indoor: number;
public intelligence: number;
public lap: number;
public life_span: string;
public name: string;
public natural: number;
public origin: string;
public rare: number;
public reference_image_id: string;
public rex: number;
public shedding_level: number;
public short_legs: number;
public social_needs: number;
public stranger_friendly: number;
public suppressed_tail: number;
public temperament: string;
public vcahospitals_url: string;
public vetstreet_url: string;
public vocalisation: number;
public weight:weight;
public wikipedia_url: string;

constructor(adaptability: number, affection_level: number, alt_names: string,
    cfa_url: string,
    child_friendly: number,
    country_code: string,
    country_codes: string,
    description: string,
    dog_friendly: number,
    energy_level: number,
    experimental: number,
    grooming: number,
    hairless: number,
    health_issues: number,
    hypoallergenic: number,
    id: string,
    indoor: number,
    intelligence: number,
    lap: number,
    life_span: string,
    name: string,
    natural: number,
    origin: string,
    rare: number,
    reference_image_id: string,
    rex: number,
    shedding_level: number,
    short_legs: number,
    social_needs: number,
    stranger_friendly: number,
    suppressed_tail: number,
    temperament: string,
    vcahospitals_url: string,
    vetstreet_url: string,
    vocalisation: number,
    weight:weight,
    wikipedia_url: string,) {
    this.adaptability = adaptability;
   this.affection_level= affection_level;
    this.alt_names= alt_names;
this.cfa_url= cfa_url;
this.child_friendly= child_friendly;
this.country_code= country_code;
this.country_codes= country_codes;
this.description= description;
this.dog_friendly= dog_friendly;
this.energy_level= energy_level;
this.experimental= experimental;
this.grooming= grooming;
this.hairless= hairless;
this.health_issues= health_issues;
this.hypoallergenic= hypoallergenic;
this.id= id;
this.indoor= indoor;
this.intelligence= intelligence;
this.lap= lap;
this.life_span= life_span;
this.name= name;
this.natural= natural;
this.origin= origin;
this.rare= rare;
this.reference_image_id= reference_image_id;
this.rex= rex;
this.shedding_level= shedding_level;
this.short_legs= short_legs;
this.social_needs= social_needs;
this.stranger_friendly= stranger_friendly;
this.suppressed_tail= suppressed_tail;
this.temperament= temperament;
this.vcahospitals_url= vcahospitals_url;
this.vetstreet_url= vetstreet_url;
this.vocalisation= vocalisation;
this.weight=weight;
this.wikipedia_url= wikipedia_url;}
}

export class CatGallery {
    public id: string;
    public url: string;
    public width: number;
    public height: number;
constructor(id: string, url: string, width: number, height: number,) {
    this.id = id;
    this.url = url;
    this.width= width;
    this.height=height
   
}}

export interface Cats {
    number: number;
}
export interface weight {
    imperial: string,
    metric: string
}
