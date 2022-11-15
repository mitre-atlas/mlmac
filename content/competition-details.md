---
title: Competition Details
---

The official rules and terms of services can be read [here](/terms).

## Schedule

The competition will begin November 18, 2022, anywhere on Earth (AoE), and conclude four weeks later on December 16, 2022, AoE. The competition will be announced at the [15th ACM Workshop for Artificial Intelligence and Security](https://aisec.cc/).

## Threat Model

We consider a scenario in which a naive adversary has stolen an LLM and fine-tuned it for a specific task. The owners of the base models did not make any attempt to watermark their models. No particular effort has been made by the adversary to obfuscate the fine-tuned model’s provenance. The participants have full access to the base models, but only API access to the fine-tuned models.

## Scenario

Participants are tasked with attributing fine-tuned models to a set of base models by any means they deem appropriate. Every contestant will be given full access to every base model. In addition, each contestant will be given blind API access to each fine-tuned model to collect additional evidence. Contestants must submit a solution in the form of (_fine-tuned model, base model_) pairs. A list of candidate base models will be known, and there will also be a _None_ category to denote that a particular fine-tuned model does not inherit from any of the base models provided.

## Participating

**Requirements**. Contestants must register for the competition at [Kaggle](https://www.kaggle.com/competitions/ml-model-attribution-2) and at [mlmac.io](https://mlmac.io) with a valid GitHub account and agree to [terms of service](/terms) outlining the rules, judging criteria, and legal elements about indemnity and awards disbursement. Contestants may consist of a team, but the team may only participate through a single account. Cooperation or collusion between accounts will disqualify contestants.

**Getting started**. Upon registration, each contestant will be provided with a list of candidate base models, a competition API key, and example code for interacting with the [mlmac.io](http://mlmac.io) inference API that serves the fine-tuned models.

**Interacting with the base models**. The base models are available via the [model-attribution-challenge](https://huggingface.co/model-attribution-challenge) organization on huggingface. Contestants have full access the the base models and are free to query them via the huggingface API or download them.

**Interacting with the fine-tuned models**. The competition API key is used to interact with anonymous fine-tuned models via [mlmac.io](http://mlmac.io). A contestant submits a prompt to the query endpoint and receives the generated text as a response. Fine-tuned models are referred to by a single integer between 0 and 23. For example, to query model 0, one issues a `POST https://api.mlmac.io:8080/query?model=0`. Details and example code are provided to contestants upon registration. The service counts the model queries for each user.

## Submission

Participants can submit their solutions at [Kaggle](https://www.kaggle.com/competitions/ml-model-attribution-2). Participants may submit their solutions and revise their submissions as many times as they like. Only the final submission from each participant will be scored for prize consideration. Participants do not receive feedback on their solution upon submission.

## Evaluation Criteria

Solutions submitted to [Kaggle](https://www.kaggle.com/competitions/ml-model-attribution-2) will be evaluated by the following rank-ordered criteria:

(1) **Correctness of submitted result**: the solution with a highest number of correct (_fine-tuned model, base model_) pairs.

(2) **Fewest queries to fine-tuned models**: a tie will be broken by selecting the contestant who used the fewest API queries to interact with the anonymous fine-tuned models. (Contestants may query _base_ models as many times as needed without penalty.)

(3) **Earliest submission time**: any subsequent tie will be broken by selecting the contestant whose final submission was earliest.

## Prizes

According to Kaggle’s Community Competition rules, no prizes will be awarded for this competition.
