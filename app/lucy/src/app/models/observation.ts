export interface Observation {
    observation_id: number;
    lat: number;
    long: number;
    date: string;
    observerFirstName: string;
    observerLastName: string;
    observerOrganization: Organization;
    speciesObservations: SpeciesObservations[];
}

export interface Organization {
    name: string;
}
export interface InvasivePlantSpecies {
    commonName: string;
    containmentSpacialRef: number;
    containmentSpecies: number;
    earlyDetection: boolean;
    genus: string;
    latinName: string;
    mapCode: string;
    species: string;
    species_id: number;
}

export interface Jurisdiction {
    jurisdiction_code_id: number;
    code: string;
    description: string;
    activeIndicator: true;
}

export interface SpeciesObservations {
    observationSpecies_Id: number;
    species: InvasivePlantSpecies;
    jurisdiction: Jurisdiction;
	width: number;
	length: number;
	accessDescription: string;
}

export interface SpeciesDensityCodes {
        species_density_code_id: number;
        code: string;
        description: string;
        activeIndicator: boolean;
}

export interface SpeciesDistributionCodes {
        description: string;
        activeIndicator: boolean;
        species_distribution_code_id: number;
}