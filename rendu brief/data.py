import pandas as pd
import json
from sklearn.preprocessing import LabelEncoder
from collections import Counter
import numpy

#afficher les données globales par jour et convertir au format json
def focus(filename):
    dataset= pd.read_csv(filename, sep = ",", na_filter=False)
    dataset2 = dataset[dataset['sexe'].isin([0])] 
    d = dataset2.groupby("jour").sum()
    #ON TRANSFORME LES DONNEES EN JSON
    data = d.to_json()
    return(data)

#afficher la moyenne par sexe par catégorie et convertir au format json
def moyby(filename):
    dataset= pd.read_csv(filename, sep = ",", na_filter=False)
    d3 = dataset.groupby("sexe").mean()
    #ON TRANSFORME LES DONNEES EN JSON
    data3 = d3.to_json()
    return(data3)

#afficher le nombre d'hospitalisation moyenne par département et convertir au format json
def dephop(filename):
    dataset= pd.read_csv(filename, sep = ",", na_filter=False)
    dataset4= dataset[dataset['sexe'].isin([0])]

    d9 = dataset4.groupby("dep").sum()
    d9.reset_index(level=0, inplace=True)
    #-1 pour récu
    #ON TRANSFORME LES DONNEES EN JSON
    data4 = d9.to_json()
    return(data4)

#afficher le nombre de décès en % 
def piehf(filename):
    dataset= pd.read_csv(filename, sep = ",", na_filter=False)
    dataset0=  dataset.groupby("sexe").mean()
    d0 = dataset0.filter(["dc"])
    #ON TRANSFORME LES DONNEES EN JSON
    data5 = d0.to_json()
    return(data5)

# #afficher le nombre de mort par département et convertir au format json
# def openfile6(filename):
#     dataset= pd.read_csv(filename, sep = ";", na_filter=False)

#     dataset4= dataset[dataset['sexe'].isin([0])].groupby('region').mean().T 
    
#     #ON TRANSFORME LES DONNEES EN JSON
#     data5 = dataset4.to_json()
#     return(data5)

#afficher le nombre de mort par département et convertir au format json
def hopdep2(filename):
    dataset= pd.read_csv(filename, sep = ",", na_filter=False)
    dataset4= dataset[dataset['sexe'].isin([0])] 
    d8 = dataset4.groupby("dep").mean()
    #ON TRANSFORME LES DONNEES EN JSON
    data7 = d8.to_json()
    return(data7)





#permet de lire le fichier json 
#datajson = json.loads(data)
#encodage
#print(json.dumps(datajson))





 #