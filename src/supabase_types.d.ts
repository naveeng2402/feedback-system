export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      alumni_answers: {
        Row: {
          alumni_res_id: number | null
          answer: number | null
          created_at: string | null
          id: number
          question_id: number | null
        }
        Insert: {
          alumni_res_id?: number | null
          answer?: number | null
          created_at?: string | null
          id?: number
          question_id?: number | null
        }
        Update: {
          alumni_res_id?: number | null
          answer?: number | null
          created_at?: string | null
          id?: number
          question_id?: number | null
        }
      }
      alumni_response: {
        Row: {
          alumni_name: string | null
          batch: string | null
          created_at: string | null
          dept_id: number | null
          id: number
        }
        Insert: {
          alumni_name?: string | null
          batch?: string | null
          created_at?: string | null
          dept_id?: number | null
          id?: number
        }
        Update: {
          alumni_name?: string | null
          batch?: string | null
          created_at?: string | null
          dept_id?: number | null
          id?: number
        }
      }
      answer: {
        Row: {
          answer: number | null
          created_at: string | null
          id: number
          question_id: number | null
          response_id: number | null
        }
        Insert: {
          answer?: number | null
          created_at?: string | null
          id?: number
          question_id?: number | null
          response_id?: number | null
        }
        Update: {
          answer?: number | null
          created_at?: string | null
          id?: number
          question_id?: number | null
          response_id?: number | null
        }
      }
      departments: {
        Row: {
          created_at: string | null
          id: number
          name: string
          short_name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          short_name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          short_name?: string
        }
      }
      dept_subject: {
        Row: {
          created_at: string | null
          dept_id: number | null
          id: number
          reg_id: number | null
          sem: number
          subject_id: number | null
        }
        Insert: {
          created_at?: string | null
          dept_id?: number | null
          id?: number
          reg_id?: number | null
          sem: number
          subject_id?: number | null
        }
        Update: {
          created_at?: string | null
          dept_id?: number | null
          id?: number
          reg_id?: number | null
          sem?: number
          subject_id?: number | null
        }
      }
      employer_answers: {
        Row: {
          answer: number | null
          created_at: string | null
          employer_res_id: number | null
          id: number
          question_id: number | null
        }
        Insert: {
          answer?: number | null
          created_at?: string | null
          employer_res_id?: number | null
          id?: number
          question_id?: number | null
        }
        Update: {
          answer?: number | null
          created_at?: string | null
          employer_res_id?: number | null
          id?: number
          question_id?: number | null
        }
      }
      employer_response: {
        Row: {
          company: string | null
          created_at: string | null
          employer_name: string | null
          id: number
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          employer_name?: string | null
          id?: number
        }
        Update: {
          company?: string | null
          created_at?: string | null
          employer_name?: string | null
          id?: number
        }
      }
      feedback: {
        Row: {
          batch: number
          created_at: string | null
          department_id: number
          id: number
          is_published: boolean
          regulation_id: number
          section: string | null
          sem: number
        }
        Insert: {
          batch: number
          created_at?: string | null
          department_id: number
          id?: number
          is_published?: boolean
          regulation_id: number
          section?: string | null
          sem: number
        }
        Update: {
          batch?: number
          created_at?: string | null
          department_id?: number
          id?: number
          is_published?: boolean
          regulation_id?: number
          section?: string | null
          sem?: number
        }
      }
      feedback_questions: {
        Row: {
          created_at: string | null
          feedback_id: number | null
          id: number
          question_id: number | null
        }
        Insert: {
          created_at?: string | null
          feedback_id?: number | null
          id?: number
          question_id?: number | null
        }
        Update: {
          created_at?: string | null
          feedback_id?: number | null
          id?: number
          question_id?: number | null
        }
      }
      question: {
        Row: {
          created_at: string | null
          feedback_type: string
          id: number
          no_of_options: number | null
          question: string | null
          question_no: number | null
        }
        Insert: {
          created_at?: string | null
          feedback_type: string
          id?: number
          no_of_options?: number | null
          question?: string | null
          question_no?: number | null
        }
        Update: {
          created_at?: string | null
          feedback_type?: string
          id?: number
          no_of_options?: number | null
          question?: string | null
          question_no?: number | null
        }
      }
      question_options: {
        Row: {
          created_at: string | null
          id: number
          option: string | null
          question_id: number | null
          value: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          option?: string | null
          question_id?: number | null
          value?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          option?: string | null
          question_id?: number | null
          value?: number | null
        }
      }
      regulations: {
        Row: {
          created_at: string
          id: number
          reg: number
        }
        Insert: {
          created_at?: string
          id?: number
          reg: number
        }
        Update: {
          created_at?: string
          id?: number
          reg?: number
        }
      }
      response: {
        Row: {
          created_at: string | null
          feedback_id: number | null
          id: number
          student_id: string | null
        }
        Insert: {
          created_at?: string | null
          feedback_id?: number | null
          id?: number
          student_id?: string | null
        }
        Update: {
          created_at?: string | null
          feedback_id?: number | null
          id?: number
          student_id?: string | null
        }
      }
      staff_mapping: {
        Row: {
          created_at: string | null
          feedback_id: number
          id: number
          staff_id: string
          sub_id: number
        }
        Insert: {
          created_at?: string | null
          feedback_id: number
          id?: number
          staff_id: string
          sub_id: number
        }
        Update: {
          created_at?: string | null
          feedback_id?: number
          id?: number
          staff_id?: string
          sub_id?: number
        }
      }
      staff_profile: {
        Row: {
          created_at: string | null
          dept_id: number | null
          designation: string | null
          id: string
          name: string | null
          staff_no: string | null
        }
        Insert: {
          created_at?: string | null
          dept_id?: number | null
          designation?: string | null
          id: string
          name?: string | null
          staff_no?: string | null
        }
        Update: {
          created_at?: string | null
          dept_id?: number | null
          designation?: string | null
          id?: string
          name?: string | null
          staff_no?: string | null
        }
      }
      student_profile: {
        Row: {
          batch: number | null
          dept_id: number | null
          id: string
          isNewUser: boolean
          name: string | null
          roll_no: number | null
          section: string | null
          updated_at: string | null
        }
        Insert: {
          batch?: number | null
          dept_id?: number | null
          id: string
          isNewUser?: boolean
          name?: string | null
          roll_no?: number | null
          section?: string | null
          updated_at?: string | null
        }
        Update: {
          batch?: number | null
          dept_id?: number | null
          id?: string
          isNewUser?: boolean
          name?: string | null
          roll_no?: number | null
          section?: string | null
          updated_at?: string | null
        }
      }
      subject: {
        Row: {
          category: string | null
          code: string
          created_at: string | null
          id: number
          is_theory: boolean
          name: string
          reg_id: number | null
          short_name: string | null
        }
        Insert: {
          category?: string | null
          code: string
          created_at?: string | null
          id?: number
          is_theory?: boolean
          name: string
          reg_id?: number | null
          short_name?: string | null
        }
        Update: {
          category?: string | null
          code?: string
          created_at?: string | null
          id?: number
          is_theory?: boolean
          name?: string
          reg_id?: number | null
          short_name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_alumni_response_list: {
        Args: {
          from_year: number
          to_year: number
        }
        Returns: {
          id: number
          alumni_name: string
          batch: string
          dept: string
          created_at: string
          avg_answer: number
        }[]
      }
      get_alumni_response_year_options_function: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_employer_response_list: {
        Args: {
          from_year: number
          to_year: number
        }
        Returns: {
          id: number
          employer_name: string
          company: string
          created_at: string
          avg_answer: number
        }[]
      }
      get_employer_response_year_options_function: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
