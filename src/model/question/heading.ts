'use strict';

export interface HeadingImage {
  url: string;
}

export interface NormalHeading {
  heading: string;
  image?: HeadingImage;
}

export interface RansomAssignment {
  percent: number;
  position: number;
  variable_name: string;
  id: string;
}

export interface RandomAssignmentHeading {
  heading: '';
  description: string;
  image?: HeadingImage;
  random_assignment: RansomAssignment;
}

export type Heading = NormalHeading | RandomAssignmentHeading;
